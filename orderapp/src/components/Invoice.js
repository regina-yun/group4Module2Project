import {v4 as uuid} from 'uuid';

export default function Invoice() {
    const id = uuid();
    console.log("Order Id:", id);

return (
    <p style={{textAlign: "center"}}><strong>Invoice number:</strong>&nbsp;{uuid()}</p>
)
}