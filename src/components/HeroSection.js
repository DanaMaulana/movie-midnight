import { Button, Container, Row } from "react-bootstrap";
import style from "../my-style.module.scss";

const HeroSection = () => {
  return (
    <Container>
      <Row>
        <div className={`${style.wrapper} user-select-none`}>
          <div className={style.bg}>MOVIE</div>
          <div className={style.fg}>MOVIE</div>
        </div>
        <div className="text-center">
          <Button variant="light" className="btn btn-lg mt-3 mt-lg-0 shadow-lg">
            Show All List
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default HeroSection;
