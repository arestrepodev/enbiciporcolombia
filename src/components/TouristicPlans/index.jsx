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
import StyledTitle from "../../components/StyledTitle"
import dataPlans from '../../api/plans.json';

const TouristicPlans = () => {
  return (
    <TouristicPlansWrapper>
      <StyledTitle subtitle='Tenemos los Mejores' title='Destinos' />
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
      </TouristicPlansList>
    </TouristicPlansWrapper>
  );
};

export default TouristicPlans;
