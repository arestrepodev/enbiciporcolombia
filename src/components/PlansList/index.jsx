import React, { useEffect, useContext } from 'react';
import { MdStars } from 'react-icons/md';
import { Context } from '../../Context';
import {
  PlansListWrapper,
  PlansListHeader,
  PlansListContent,
  PlansListTable,
  Features,
  Plans,
  Plan,
} from './style';
import { LinkButtonBlueSmall } from '../../styles/Buttons';
import { IMG_PATH } from '../../helpers';
import ApiPlansDetails from '../../api/plansDetails';

const PlansList = () => {
  const { isEnglish } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${ApiPlansDetails}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      const data = await response.json();
    };
    fetchData();
  }, []);
  return (
    <PlansListWrapper>
      <PlansListHeader>
        <h1>{isEnglish ? 'The Best Plans' : 'Los Mejores Planes para Ti'}</h1>
      </PlansListHeader>
      <PlansListContent>
        <PlansListTable>
          <Features>
            <li>{isEnglish ? 'Fast' : 'Rápido'}</li>
            <li>{isEnglish ? 'Easy' : 'Fácil'}</li>
            <li>{isEnglish ? 'Simple' : 'Fácil'}</li>
          </Features>
          <Plans>
            <Plan>
              <img src={`${IMG_PATH}plan-basic.jpg`} alt='Plan Basic' />
              <article>
                <h3>{isEnglish ? 'Basic Plan' : 'Plan Basic'}</h3>
                <p>
                  {isEnglish
                    ? 'This plan is suitable for all people who want to start to know Colombia on their bicycle, we make short tours ...'
                    : 'Este plan se adecua a todos las personas que quieran iniciar a conocer Colombia en su bicicleta, realizamos recorridos cortos...'}
                </p>

                {/* <b>$700.000 </b> */}
                <span>
                  7.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/basic'>
                    {isEnglish ? 'View More' : 'Ver Plan Basic'}
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
            <Plan>
              <img src={`${IMG_PATH}plan-adventure.jpg`} alt='Plan Adventure' />
              <article>
                <h3>{isEnglish ? 'Adventure Plan' : 'Plan Adventure'}</h3>
                <p>
                  {isEnglish
                    ? 'This plan challenges people who cycle for high-level fans to discover new landscapes, sections and routes ...'
                    : 'Este plan reta a las personas que hagan ciclismo para aficionados de alto nivel a descrubir nuevos paisajes, tramos y rutas...'}
                </p>

                {/* <b>$1.200.000 </b> */}
                <span>
                  8.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/adventure'>
                    {isEnglish ? 'View More' : 'Ver Plan Adventure'}
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
            <Plan>
              <img src={`${IMG_PATH}plan-extreme.jpg`} alt='Plan Extreme' />
              <article>
                <h3>{isEnglish ? 'Extreme Plan' : 'Plan Extreme'}</h3>
                <p>
                  {isEnglish
                    ? "The expert plan will test high-performance cyclists against Colombia's climates and landscapes ..."
                    : 'Este plan para expertos pondrá a prueba a los ciclistas de alto rendimiento ante los climas y paisajes de Colombia...'}
                </p>

                {/* <b>$1.200.000 </b> */}
                <span>
                  9.0 <MdStars />
                </span>
                <div>
                  <LinkButtonBlueSmall className='is-block' to='/extreme'>
                    {isEnglish ? 'View More' : 'Ver Plan Extreme'}
                  </LinkButtonBlueSmall>
                </div>
              </article>
            </Plan>
          </Plans>
        </PlansListTable>
      </PlansListContent>
    </PlansListWrapper>
  );
};

export default PlansList;
