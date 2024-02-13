import OpenAI from 'openai';
import { openAI_KEY, openAI_KEY_Rahul, openAI_KEY_Second } from './constants';

const openai = new OpenAI({
  apiKey: openAI_KEY_Second,
  dangerouslyAllowBrowser:true
});

export default openai;