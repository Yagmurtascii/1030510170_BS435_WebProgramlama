import { Container, Row} from "react-bootstrap";
import Input from "./InputGroup";


const ClassicMode = ({ count,endValue,startValue }) => {

    const finalCount = count !== undefined ? count : 5;
    const finalEndValue = endValue !== undefined ? endValue : 100;
    const finalStartValue = startValue !== undefined ? startValue : 1;
    return (
        <div>
            <Container>
                <Row>
                    <Input isTimeOrChance={0} counts={finalCount} endvalues={finalEndValue} startvalues={finalStartValue}></Input>
                </Row>
            </Container>
        </div>
    );
}

export default ClassicMode;
