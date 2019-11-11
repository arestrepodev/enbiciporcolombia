import React from 'react';
import { MdToday, MdPersonPin, MdPlace, MdStar } from 'react-icons/md';
import {
  TouristicPlansWrapper,
  TouristicPlansList,
  Plan,
  PlanLabels,
  PlanDescription,
  PlanPrice
} from './style';
import dataPlans from '../../api/plans.json';

const TouristicPlans = () => {
  return (
    <TouristicPlansWrapper>
      <h2>Planes</h2>
      <TouristicPlansList>
        {dataPlans.map(plan => (
          <Plan key={plan.id}>
            <img src={plan.img} alt={plan.title} />
            <PlanLabels>
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
