import { plainToClass } from 'class-transformer';
import { Validator, Schema, ValidatorResult } from 'jsonschema';
import { ClassType } from 'class-transformer/ClassTransformer';

export function  add(a: number , b: number ): number {
    return a + b;
}


export function translatorObjToClass<T>(obj: object, classType: ClassType<T>): T {
    return plainToClass(classType, obj);
}


export function validateJsonBySchema(instance: any, schema: Schema): boolean {
    const v = new Validator();
    const result: ValidatorResult = v.validate(instance, schema);
    if (result.valid) {
        return true;
    } else {
        throw new Error(result.toString());
    }
}

