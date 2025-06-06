import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    registerDecorator,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'Match' })
  export class MatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
      const [relatedPropertyName] = args.constraints;
      const relatedValue = (args.object as any)[relatedPropertyName];
      return value === relatedValue;
    }
  }
  
  export function Match(property: string, validationOptions?: any) {
    return (object: any, propertyName: string) => {
      const options = { ...validationOptions, constraints: [property] };
      return registerDecorator({
        target: object.constructor,
        propertyName,
        options,
        constraints: [property],
        validator: MatchConstraint,
      });
    };
  }