import { Link } from "react-router";
import styled from "styled-components";
import { events, starCount } from "../../years";

const Intro = styled.p`
  margin-top: 0;
`;

const EventList = styled.pre`
  margin: 0;
  line-height: 1.6;
`;

const Stars = styled.span`
  color: #ffff66;
`;

const Total = styled.span`
  color: #666666;
`;

const Home = () => (
  <>
    <Intro>Every Advent of Code event, with my solutions and the stars I&apos;ve collected in each:</Intro>
    <EventList>
      {events.map(({ year, status, days }) => {
        const stars = starCount(status);
        return (
          <div key={year}>
            <Link to={`/${year}`}>[{year}]</Link>
            {stars > 0 && (
              <>
                {" "}
                <Stars>{`${stars}*`.padStart(3)}</Stars>
                <Total>{` / ${days * 2}*`}</Total>
              </>
            )}
          </div>
        );
      })}
    </EventList>
  </>
);

export default Home;
