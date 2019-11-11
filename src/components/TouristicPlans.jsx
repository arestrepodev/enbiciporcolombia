import React from 'react';
import styled from 'styled-components';
import { MdToday, MdPersonPin, MdPlace, MdStar } from 'react-icons/md';
import dataPlans from '../api/plans.json';

const TouristicPlansWrapper = styled.section`
  padding: 1rem;
  h2 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const TouristicPlansList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem 0.5rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Plan = styled.article`
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 5px 0px rgba(89, 89, 89, 0.37);
  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    background: rgba(240, 240, 240, 0.5);
    cursor: pointer;
  }
`;

const PlanLabels = styled.div`
  padding: 0.4rem;
  background: var(--color-blue);
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    li {
      color: var(--color-white);
      display: flex;
      align-items: center;
    }
  }
`;

const PlanDescription = styled.div`
  /* background: white; */
  padding: 1rem;
  h4 {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  /* background: var(--color-white); */
  span {
    display: flex;
    align-items: center;
  }
`;

const TouristicPlans = () => {
  return (
    <TouristicPlansWrapper>
      <h2>Planes</h2>
      <TouristicPlansList>
        {dataPlans.map(plan => (
          <Plan key={plan.id}>
            <img src={plan.img} alt={plan.title} />
            <PlanLabels>
              <h3 />
              <ul>
                <li>
                  <MdToday />
                  {plan.calendar_number}
                </li>
                <li>
                  <MdPersonPin />
                  {plan.min_age}
                </li>
                <li>
                  <MdPlace /> {plan.type}
                </li>
              </ul>
            </PlanLabels>
            <PlanDescription>
              <h4>{plan.title}</h4>
              <small>{plan.description}</small>
            </PlanDescription>
            <PlanPrice>
              <span>{plan.base_price}</span>
              <span>
                <MdStar /> {plan.stars}
              </span>
              <span>{plan.stars}</span>
            </PlanPrice>
          </Plan>
        ))}
        {/* <Plan>
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Cover Plan"
          />
          <PlanLabels>
            <ul>
              <li>
                <MdToday />1
              </li>
              <li>
                <MdPersonPin />3
              </li>
              <li>
                <MdPlace /> Tunja
              </li>
            </ul>
          </PlanLabels>
          <PlanDescription>
            <h4>Moniquira</h4>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, quaerat...
            </small>
          </PlanDescription>
          <PlanPrice>
            <span>$400.000</span>
            <span>
              <MdStar /> 6
            </span>
            <span>Good</span>
          </PlanPrice>
        </Plan> */}
      </TouristicPlansList>
    </TouristicPlansWrapper>
  );
};

export default TouristicPlans;
