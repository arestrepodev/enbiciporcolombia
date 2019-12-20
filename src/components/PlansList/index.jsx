import React from 'react';
import { MdStars } from 'react-icons/md';
import {
  PlansListWrapper,
  PlansListHeader,
  PlansListContent,
  PlansListTable,
  Features,
  Plans,
  Plan
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
            <Plan>
              <img src='https://picsum.photos/300/150' alt='FotoPaisaje' />
              <article>
                <h3>Plan Basic</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium, laboriosam molestias! Tenetur aut beatae ratione.
                </p>

                <b>$700.000 </b>
                <span>
                  7.0 <MdStars />
                </span>
              </article>
            </Plan>
            <Plan>
              <img src='https://picsum.photos/300/150' alt='FotoPaisaje' />
              <article>
                <h3>Plan Adventure</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium, laboriosam molestias! Tenetur aut beatae ratione.
                </p>

                <b>$900.000 </b>
                <span>
                  8.0 <MdStars />
                </span>
              </article>
            </Plan>
            <Plan>
              <img src='https://picsum.photos/300/150' alt='FotoPaisaje' />
              <article>
                <h3>Plan Extreme</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium, laboriosam molestias! Tenetur aut beatae ratione.
                </p>

                <b>$1.200.000 </b>
                <span>
                  9.0 <MdStars />
                </span>
              </article>
            </Plan>
          </Plans>
        </PlansListTable>
      </PlansListContent>
    </PlansListWrapper>
  );
};

export default PlansList;
