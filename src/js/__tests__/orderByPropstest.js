import { orderByProps } from '../orderByProps';

describe('orderByProps', () => {
    test('should sort properties by the order array and then alphabetically', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const order = ["name", "level"];
        const sortedProps = orderByProps(obj, order);
        
        expect(sortedProps).toEqual([
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 }
        ]);
    });
});