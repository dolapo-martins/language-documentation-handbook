import { Tool } from "ai-jsx/batteries/use-tools";
import {
  YourSidekickSystemMessage,
  finalSystemMessageBeforeResponse,
} from "./system-message.js";
import { FixieCorpus } from "ai-jsx/batteries/docs";
import { Sidekick } from "ai-jsx/sidekick";

//TODO: Replace with your Fixie Corpus ID
// This Corpus contains information about foxes. Some suggested queries to try once
// you deploy this sidekick are:
//    tell me about foxes and what they eat
//    what is the fennec fox like? how big do they get?
//    who is foxie?
const HANDBOOK_CORPUS_ID: string = "31083406-0001-49d1-aafd-fee6130eeb49";
const ENDANGERED_LIST_CORPUS_ID: string = "1045f09f-e237-4074-ae4d-a5ef97f98d24";
const AUSTRIA_COUNTRY_ID: string = "a5c1ab82-9c4c-46d6-bac8-b686fef0b31e";

if (!HANDBOOK_CORPUS_ID) {
  throw new Error("Please set a FIXIE_CORPUS_ID in src/index.tsx");
}

const systemMessage = <YourSidekickSystemMessage />;

const tools: Record<string, Tool> = {
  // TODO: To help the model understand when to call this tool, name the function
  // something more descriptive like 'lookUpAcmeCompanyKnowledgeBase'.
  // For more tips on using Tools, see: https://docs.ai-jsx.com/tutorial/part7-tools
  lookUpLinguisticsFieldBestPracticesKnowledgeBase: FixieCorpus.createTool(
    HANDBOOK_CORPUS_ID,
    "A tool for learning how to document languages while doing linguistic fieldwork."
  ),
  lookUpEndangeredLanguages: FixieCorpus.createTool(
    ENDANGERED_LIST_CORPUS_ID,
    "A tool for looking up a list of known endangered and dying languages."
  ),
  lookUpAustria: FixieCorpus.createTool(
    AUSTRIA_COUNTRY_ID,
    "A tool for looking up endangered and dying languages in Austria only."
  )
  /*
  anotherPossibleTool: {
    description:
      "Another tool, possibly for calling out to an API",
    parameters: {
      query: {
        description:
          "A parameter for the tool",
        type: "string",
        required: true,
      },
    },
    func: async ({ query }) => {
      return "Hello, world! Your query was: {query}"
    },
  }
  */
};

export default function SidekickTemplate() {
  return (
    <Sidekick
      // TODO: Give the Sidekick a descriptive role like "A helpful assistant for Acme Company".
      role="A helpful assistant who coaches you on the basic steps of language documentation."
      systemMessage={systemMessage}
      tools={tools}
      finalSystemMessageBeforeResponse={finalSystemMessageBeforeResponse}
    />
  );
}
