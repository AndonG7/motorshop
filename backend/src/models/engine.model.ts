import {Schema, model} from 'mongoose';

export interface Engine{
    id:string;
    name:string;
    price:number;
    tags: string[];
    imageUrl: string;
    origins: string[];
    mileage: number;
}

export const EngineSchema = new Schema<Engine>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true},
        mileage: {type: Number, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const EngineModel = model<Engine>('engine', EngineSchema);