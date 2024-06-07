export function orderByProps(obj, order) {
    const orderedProps = [];
    const restProps = [];

    for (const prop of order) {
        if (obj.hasOwnProperty(prop)) {
            orderedProps.push({ key: prop, value: obj[prop] });
        }
    }
    
    for (const prop in obj) {
        if (!order.includes(prop)) {
            restProps.push({ key: prop, value: obj[prop] });
        }
    }

    restProps.sort((a, b) => a.key.localeCompare(b.key));

    return [...orderedProps, ...restProps];
}

export default async function run({execution_id, input, data, store}) {

    return {
    };
}