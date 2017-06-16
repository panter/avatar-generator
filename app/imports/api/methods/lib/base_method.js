import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { PermissionsMixin } from 'meteor/didericis:permissions-mixin';
import SimpleSchema from 'simpl-schema';

function schemaMixin(methodOptions) {
  const clean = methodOptions.clean || false;
  let schema = methodOptions.schema;
  if (!(schema instanceof SimpleSchema)) {
    schema = new SimpleSchema(schema);
  }
  return {
    ...methodOptions,
    validate: schema.validator({ clean }),
  };
}


export default class BaseMethod extends ValidatedMethod {
  constructor(methodDefinition) {
    const mixins = (
      Array.isArray(methodDefinition.mixins) ?
      methodDefinition.mixins.concat(PermissionsMixin).concat(schemaMixin) :
      [PermissionsMixin, schemaMixin]
    );
    super({
      ...methodDefinition,
      mixins,
    });
  }
}
