import React from "react";
import { observer } from "mobx-react-lite";
import { ChatMessageListReplay } from "./ChatMessageListReplay";
import type { ClassroomReplayStore } from "@netless/flat-stores";
import { useTranslate } from "@netless/flat-i18n";

export interface ChatMessagesReplayProps {
    classRoomReplayStore: ClassroomReplayStore;
}

export const ChatMessagesReplay = observer<ChatMessagesReplayProps>(function ChatMessagesReplay({
    classRoomReplayStore,
}) {
    const t = useTranslate();
    return (
        <div className="chat-messages-wrap">
            <div className="chat-messages">
                {classRoomReplayStore.messages.length > 0 ? (
                    <div className="chat-messages-box">
                        {<ChatMessageListReplay classRoomReplayStore={classRoomReplayStore} />}
                    </div>
                ) : (
                    <div className="chat-messages-default">{t("no-message-tips")}</div>
                )}
            </div>
        </div>
    );
});

export default ChatMessagesReplay;
