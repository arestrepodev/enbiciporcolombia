import React, { useContext, useEffect, useState } from 'react';
import { MdToday, MdPersonPin, MdPlace, MdStar } from 'react-icons/md';
import { Context } from '../../Context';
import {
  TouristicPlansWrapper,
  TouristicPlansList,
  Plan,
  PlanLabels,
  PlanDescription,
  PlanPrice,
} from './style';
import StyledTitle from '../StyledTitle';
import spanishDestinations from '../../api/destinationsEs.json';
import englishDestinations from '../../api/destinationsEn.json';

const TouristicPlans = () => {
  const { isEnglish } = useContext(Context);
  const [dataPlans, setDataPlans] = useState(spanishDestinations);
  useEffect(() => {
    isEnglish
      ? setDataPlans(englishDestinations)
      : setDataPlans(spanishDestinations);
  }, [isEnglish]);
  return (
    <TouristicPlansWrapper>
      <StyledTitle
        subtitle={isEnglish ? 'The Best' : 'Tenemos los Mejores'}
        title={isEnglish ? 'Destinations' : 'Destinos'}
      />
      <TouristicPlansList>
        {dataPlans.map((plan) => (
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
