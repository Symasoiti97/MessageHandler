import { MessageType } from "./messageType";

export class MessageShowService {

    public handle(json: string) {
        var obj = JSON.parse(json);
        switch (obj.type) {
            case MessageType.userNotFound:
                console.info(`User not found by id ${obj.userId}`);
                break;
            case MessageType.userAlreadyExists:
                console.info(`User already exists by email ${obj.userEmail}`);
                break;
            case MessageType.userNameInvalid:
                console.info(`User name invalid '${obj.userName}'`);
                break;
            case MessageType.userAgeInvalid:
                console.info(`User age invalid ${obj.userAge}`);
                break;
            default: console.error(`Unknown error message type '${obj.type}'`);
        }
    }
}