import { Meta, Story } from "@storybook/react";
import faker from "faker";
import Chance from "chance";
import React from "react";
import { ChatPanel, ChatPanelProps } from ".";
import { User } from "../../types/user";

const chance = new Chance();

const storyMeta: Meta = {
    title: "ChatPanel/ChatPanel",
    component: ChatPanel,
};

export default storyMeta;

export const Overview: Story<ChatPanelProps> = args => (
    <div style={{ height: "80vh" }}>
        <ChatPanel {...args} />
    </div>
);
const makeUser = (): User => ({
    userUUID: faker.datatype.uuid(),
    name: faker.name.lastName(),
    isSpeak: faker.datatype.boolean(),
    isRaiseHand: faker.datatype.boolean(),
    avatar: "http://placekitten.com/64/64",
});
const currentUser = makeUser();
const users = (() => {
    const users = Array(3).fill(0).map(makeUser);
    users.push(currentUser);
    return chance.shuffle(users);
})();
Overview.args = {
    unreadCount: faker.datatype.number(),
    isCreator: faker.datatype.boolean(),
    isBan: faker.datatype.boolean(),
    hasHandRaising: faker.datatype.boolean(),
    generateAvatar: () => "http://placekitten.com/64/64",
    getUserByUUID: uuid => users.find(e => e.userUUID === uuid) || makeUser(),
    messages: Array(20)
        .fill(0)
        .map(() => ({
            type: "room-message",
            roomUUID: faker.datatype.uuid(),
            uuid: faker.datatype.uuid(),
            timestamp: +faker.date.past(),
            text: chance.sentence({ words: faker.datatype.number(20) }),
            senderID: chance.pickone(users).userUUID,
        })),
    ownerUUID: faker.datatype.uuid(),
    userUUID: currentUser.userUUID,
    users,
};
Overview.argTypes = {
    loadMoreRows: { action: "loadMoreRows" },
};
