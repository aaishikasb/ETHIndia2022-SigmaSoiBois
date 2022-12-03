import { decode } from "jsonwebtoken";
import { createSchema } from "../services/polygon.service";

export const createSchemaService = async (
  schema: string,
  mandatoryExpiration: boolean,
  attributes: any,
  token: string
) => {
  const payload = decode(token, { json: true });
  const issuerId = payload?.account?.organization;
  const schemaId = await createSchema(
    schema,
    mandatoryExpiration,
    attributes,
    token,
    issuerId
  );
  return schemaId;
};
