import { MessageShowService } from "./messageShowService";

const json = '{"type": "UserNotFound", "userEmail": "user@mail.com"}';
const messageShowService = new MessageShowService();
messageShowService.handle(json);