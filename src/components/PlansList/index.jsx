import React from 'react';
import {
  PlansListWrapper,
  PlansListHeader,
  PlansListContent,
  PlansListTable,
  Features,
  Plans
} from './style';

const PlansList = () => {
  return (
    <PlansListWrapper>
      <PlansListHeader>
        <h1>Los Mejores Planes para Ti</h1>
      </PlansListHeader>
      <PlansListContent>
        <PlansListTable>
          <Features>
            <li>Rápido</li>
            <li>Fácil</li>
            <li>Sencillo</li>
          </Features>
          <Plans>
            <li>
              <h3>Plan Basic</h3>
              <img src='./img/fotopaisaje.jpg' alt='FotoPaisaje' />
            </li>
          </Plans>
        </PlansListTable>
      </PlansListContent>
    </PlansListWrapper>
  );
};

export default PlansList;
