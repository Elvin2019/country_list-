
import { Form } from 'react-bootstrap'

const Selection = ({ list = [], defaultValue, onChange, ...rest }) => {
    return (
        <Form.Select aria-label="Default select example" defaultValue={defaultValue} onChange={onChange}{...rest}>
            {list.map(item => {
                return <option key={item.value} value={item.value} > {item.title}</option>
            })}

        </Form.Select>
    )
}
export default Selection