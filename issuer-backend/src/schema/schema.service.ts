import { createSchema, getIssuerID } from "../services/polygon.service";

export const createSchemaService = async (
  schema: string,
  mandatoryExpiration: boolean,
  attributes: any,
  token: string
) => {
  const issuerId = getIssuerID(token);
  const schemaId = await createSchema(
    schema,
    mandatoryExpiration,
    attributes,
    token,
    issuerId
  );
  return schemaId;
};
