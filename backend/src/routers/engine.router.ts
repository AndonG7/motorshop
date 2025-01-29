import { Router } from 'express';
import { sample_engines, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { EngineModel } from '../models/engine.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const enginesCount = await EngineModel.countDocuments();
    if (enginesCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await EngineModel.create(sample_engines);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const engines = await EngineModel.find();
    res.send(engines);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const engines = await EngineModel.find({ name: { $regex: searchRegex } });
    res.send(engines);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await EngineModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await EngineModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const engines = await EngineModel.find({ tags: req.params.tagName });
    res.send(engines);
  })
);

router.get(
  '/:engineId',
  asyncHandler(async (req, res) => {
    const engine = await EngineModel.findById(req.params.engineId);
    res.send(engine);
  })
);

export default router;
