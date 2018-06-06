import React from 'react'
import { StyleSheet } from 'react-native'
import { Content, Card, CardItem, Text, Body } from 'native-base'
import CardItemInfoRow from './CardItemInfoRow'

const dashIfZero = (value, unit) =>
  value === 0 ? '-' : `${value}${unit ? ` ${unit}` : ''}`
const yesOrNo = value => (value ? 'yes' : 'no')

const RocketDetails = ({ data }) => {
  const details = [
    {
      id: 'description',
      text: data.description
    },
    {
      title: 'status',
      id: 'active',
      text: data.active ? 'In active use' : 'Not in active use'
    },
    {
      title: 'stages',
      id: 'stages',
      text: data.stages
    },
    {
      title: 'boosters',
      id: 'boosters',
      text: dashIfZero(data.boosters)
    },
    {
      title: 'cost per launch',
      id: 'cost_per_launch',
      text: `${data.cost_per_launch}$`
    },
    {
      title: 'success rate',
      id: 'success_rate_pct',
      text: `${data.success_rate_pct}%`
    },
    {
      title: 'first flight',
      id: 'first_flight',
      text: data.first_flight
    },
    {
      title: 'height',
      id: 'height',
      text: `${data.height.meters} m / ${data.height.feet} feet`
    },
    {
      title: 'diameter',
      id: 'diameter',
      text: `${data.diameter.meters} m / ${data.diameter.feet} feet`
    },
    {
      title: 'mass',
      id: 'mass',
      text: `${data.mass.kg} kg / ${data.mass.lb} lb`
    }
  ]

  const firstStage = [
    {
      title: 'reusable',
      id: 'reusable',
      text: yesOrNo(data.first_stage.reusable)
    },
    {
      title: 'engines',
      id: 'engines',
      text: data.first_stage.engines
    },
    {
      title: 'fuel amount',
      id: 'fuel_amount_tons',
      text: `${data.first_stage.fuel_amount_tons} tons`
    },
    {
      title: 'cores',
      id: 'cores',
      text: data.first_stage.cores
    },
    {
      title: 'burn time',
      id: 'burn_time_sec',
      text: dashIfZero(data.first_stage.burn_time_sec, 'sec')
    },
    {
      title: 'thrust sea level',
      id: 'thrust_sea_level',
      text: `${data.first_stage.thrust_sea_level.kN} kN / ${
        data.first_stage.thrust_sea_level.lbf
      } lbf`
    },
    {
      title: 'thrust vacuum',
      id: 'thrust_vacuum',
      text: `${data.first_stage.thrust_vacuum.kN} kN / ${
        data.first_stage.thrust_vacuum.lbf
      } lbf`
    }
  ].filter(d => !!d.text)

  const payloadWeights = data.payload_weights.map((p, k) => ({
    title: p.name,
    id: k,
    text: `${p.kg} kg / ${p.lb} lb`
  }))

  // TODO: second_stage payloads
  const secondStage = [
    {
      title: 'engines',
      id: 'engines',
      text: data.second_stage.engines
    },
    {
      title: 'fuel amount',
      id: 'fuel_amount_tons',
      text: `${data.second_stage.fuel_amount_tons} tons`
    },
    {
      title: 'burn time',
      id: 'burn_time_sec',
      text: dashIfZero(data.second_stage.burn_time_sec, 'sec')
    },
    {
      title: 'thrust',
      id: 'thrust',
      text: `${data.second_stage.thrust.kN} kN / ${
        data.second_stage.thrust.lbf
      } lbf`
    },
    {
      title: 'payload options',
      id: 'payloads',
      text: [
        data.second_stage.payloads.option_1,
        data.second_stage.payloads.option_2,
        data.second_stage.payloads.option_3
      ]
        .filter(p => p)
        .join(', ')
    },
    {
      title: 'composite fairing',
      id: 'composite_fairing',
      text: `height: ${
        data.second_stage.payloads.composite_fairing.height.meters
      } m /${data.second_stage.payloads.composite_fairing.height.feet} feet
diameter: ${data.second_stage.payloads.composite_fairing.diameter.meters} m /${
        data.second_stage.payloads.composite_fairing.diameter.feet
      } feet`
    }
  ]

  const engines = [
    {
      title: 'number',
      id: 'number',
      text: data.engines.number
    },
    {
      title: 'type',
      id: 'type',
      text: data.engines.type
    },
    {
      title: 'version',
      id: 'version',
      text: data.engines.version
    },
    {
      title: 'layout',
      id: 'layout',
      text: data.engines.layout
    },
    {
      title: 'engine loss max',
      id: 'engine_loss_max',
      text: data.engines.engine_loss_max
    },
    {
      title: 'propellants',
      id: 'propellants',
      text: `${data.engines.propellant_1}, ${data.engines.propellant_2}`
    },
    {
      title: 'thrust sea level',
      id: 'thrust_sea_level',
      text: `${data.engines.thrust_sea_level.kN} kN / ${
        data.engines.thrust_sea_level.lbf
      } lbf`
    },
    {
      title: 'thrust vacuum',
      id: 'thrust_vacuum',
      text: `${data.engines.thrust_vacuum.kN} kN / ${
        data.engines.thrust_vacuum.lbf
      } lbf`
    },
    {
      title: 'thrust to weight',
      id: 'thrust_to_weight',
      text: data.engines.thrust_to_weight
    }
  ]

  const landingLegs = [
    {
      title: 'number',
      id: 'number',
      text: data.landing_legs.number
    },
    {
      title: 'material',
      id: 'material',
      text: data.landing_legs.material
    }
  ].filter(d => !!d.text)

  const dataMap = [
    {
      rows: details,
      id: 'details',
      title: data.name
    },
    {
      rows: firstStage,
      id: 'firstStage',
      title: 'First stage'
    },
    {
      rows: payloadWeights,
      id: 'payloadWeights',
      title: 'Payload weights'
    },
    {
      rows: secondStage,
      id: 'secondStage',
      title: 'Second stage'
    },
    {
      rows: engines,
      id: 'engines',
      title: 'Engines'
    },
    {
      rows: landingLegs,
      id: 'landingLegs',
      title: 'Landing legs'
    }
  ]
  return (
    <Content>
      {dataMap.map(d => (
        <Card key={d.id}>
          <CardItem header style={styles.cardItem}>
            <Text style={styles.infoValue}>{d.title}</Text>
          </CardItem>

          {d.rows.map(detail => (
            <CardItemInfoRow data={detail} key={detail.id} />
          ))}
        </Card>
      ))}
    </Content>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  }
})

export default RocketDetails

const data = [
  {
    id: 'falcon1',
    name: 'Falcon 1',
    type: 'rocket',
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 6700000,
    success_rate_pct: 40,
    first_flight: '2006-03-24',
    country: 'Republic of the Marshall Islands',
    company: 'SpaceX',
    height: { meters: 22.25, feet: 73 },
    diameter: { meters: 1.68, feet: 5.5 },
    mass: { kg: 30146, lb: 66460 },
    payload_weights: [{ id: 'leo', name: 'Low Earth Orbit', kg: 450, lb: 992 }],
    first_stage: {
      reusable: false,
      engines: 1,
      fuel_amount_tons: 44.3,
      burn_time_sec: 169,
      thrust_sea_level: { kN: 420, lbf: 94000 },
      thrust_vacuum: { kN: 480, lbf: 110000 }
    },
    second_stage: {
      engines: 1,
      fuel_amount_tons: 3.38,
      burn_time_sec: 378,
      thrust: { kN: 31, lbf: 7000 },
      payloads: {
        option_1: 'composite fairing',
        composite_fairing: {
          height: { meters: 3.5, feet: 11.5 },
          diameter: { meters: 1.5, feet: 4.9 }
        }
      }
    },
    engines: {
      number: 1,
      type: 'merlin',
      version: '1C',
      layout: 'single',
      engine_loss_max: 0,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_sea_level: { kN: 420, lbf: 94000 },
      thrust_vacuum: { kN: 480, lbf: 110000 },
      thrust_to_weight: 96
    },
    landing_legs: { number: 0, material: null },
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.'
  },
  {
    id: 'falcon9',
    name: 'Falcon 9',
    type: 'rocket',
    active: true,
    stages: 2,
    boosters: 0,
    cost_per_launch: 61200000,
    success_rate_pct: 94,
    first_flight: '2010-06-04',
    country: 'United States',
    company: 'SpaceX',
    height: { meters: 70, feet: 229.6 },
    diameter: { meters: 3.7, feet: 12 },
    mass: { kg: 549054, lb: 1207920 },
    payload_weights: [
      { id: 'leo', name: 'Low Earth Orbit', kg: 22800, lb: 50265 },
      { id: 'gto', name: 'Geosynchronous Transfer Orbit', kg: 8300, lb: 18300 },
      { id: 'mars', name: 'Mars Orbit', kg: 4020, lb: 8860 }
    ],
    first_stage: {
      reusable: true,
      engines: 9,
      fuel_amount_tons: 385,
      burn_time_sec: 162,
      thrust_sea_level: { kN: 7607, lbf: 1710000 },
      thrust_vacuum: { kN: 8227, lbf: 1849500 }
    },
    second_stage: {
      engines: 1,
      fuel_amount_tons: 90,
      burn_time_sec: 397,
      thrust: { kN: 934, lbf: 210000 },
      payloads: {
        option_1: 'dragon',
        option_2: 'composite fairing',
        composite_fairing: {
          height: { meters: 13.1, feet: 43 },
          diameter: { meters: 5.2, feet: 17.1 }
        }
      }
    },
    engines: {
      number: 9,
      type: 'merlin',
      version: '1D+',
      layout: 'octaweb',
      engine_loss_max: 2,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_sea_level: { kN: 845, lbf: 190000 },
      thrust_vacuum: { kN: 914, lbf: 205500 },
      thrust_to_weight: 180.1
    },
    landing_legs: { number: 4, material: 'carbon fiber' },
    description:
      'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.'
  },
  {
    id: 'falconheavy',
    name: 'Falcon Heavy',
    type: 'rocket',
    active: true,
    stages: 2,
    boosters: 2,
    cost_per_launch: 90000000,
    success_rate_pct: 100,
    first_flight: '2018-02-06',
    country: 'United States',
    company: 'SpaceX',
    height: { meters: 70, feet: 229.6 },
    diameter: { meters: 12.2, feet: 39.9 },
    mass: { kg: 1420788, lb: 3125735 },
    payload_weights: [
      { id: 'leo', name: 'Low Earth Orbit', kg: 63800, lb: 140660 },
      {
        id: 'gto',
        name: 'Geosynchronous Transfer Orbit',
        kg: 26700,
        lb: 58860
      },
      { id: 'mars', name: 'Mars Orbit', kg: 16800, lb: 37040 },
      { id: 'pluto', name: 'Pluto Orbit', kg: 3500, lb: 7720 }
    ],
    first_stage: {
      reusable: true,
      engines: 27,
      fuel_amount_tons: 1155,
      cores: 3,
      burn_time_sec: 162,
      thrust_sea_level: { kN: 22819, lbf: 5130000 },
      thrust_vacuum: { kN: 24681, lbf: 5548500 }
    },
    second_stage: {
      engines: 1,
      burn_time_sec: 397,
      thrust: { kN: 934, lbf: 210000 },
      payloads: {
        option_1: 'dragon',
        option_2: 'composite fairing',
        composite_fairing: {
          height: { meters: 13.1, feet: 43 },
          diameter: { meters: 5.2, feet: 17.1 }
        }
      }
    },
    engines: {
      number: 27,
      type: 'merlin',
      version: '1D+',
      layout: 'octaweb',
      engine_loss_max: 6,
      propellant_1: 'subcooled liquid oxygen',
      propellant_2: ' RP-1 kerosene',
      thrust_sea_level: { kN: 845, lbf: 190000 },
      thrust_vacuum: { kN: 914, lbf: 205500 },
      thrust_to_weight: 180.1
    },
    landing_legs: { number: 12, material: 'carbon fiber' },
    description:
      'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.'
  },
  {
    id: 'bfr',
    name: 'Big Falcon Rocket',
    type: 'rocket',
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 7000000,
    success_rate_pct: 0,
    first_flight: '2019-12-01',
    country: 'United States',
    company: 'SpaceX',
    height: { meters: 106, feet: 348 },
    diameter: { meters: 9, feet: 30 },
    mass: { kg: 4400000, lb: 9700000 },
    payload_weights: [
      { id: 'leo', name: 'Low Earth Orbit', kg: 150000, lb: 330000 },
      { id: 'mars', name: 'Mars Orbit', kg: 150000, lb: 330000 }
    ],
    first_stage: {
      reusable: true,
      engines: 31,
      fuel_amount_tons: 6700,
      burn_time_sec: 0,
      thrust_sea_level: { kN: 128000, lbf: 28775544 },
      thrust_vacuum: { kN: 138000, lbf: 31023634 }
    },
    second_stage: {
      engines: 6,
      fuel_amount_tons: 1100,
      burn_time_sec: 0,
      thrust: { kN: 1900, lbf: 427136 },
      payloads: {
        option_1: 'Spaceship',
        option_2: 'composite fairing',
        composite_fairing: {
          height: { meters: null, feet: null },
          diameter: { meters: null, feet: null }
        }
      }
    },
    engines: {
      number: 31,
      type: 'raptor',
      version: '',
      layout: null,
      engine_loss_max: null,
      propellant_1: 'liquid oxygen',
      propellant_2: 'liquid methane',
      thrust_sea_level: { kN: 1700, lbf: 382175 },
      thrust_vacuum: { kN: 1900, lbf: 427136 },
      thrust_to_weight: null
    },
    landing_legs: { number: 4, material: 'carbon fiber' },
    description:
      "BFR is a privately funded next-generation reusable launch vehicle and spacecraft system developed by SpaceX. It was announced by Elon Musk in September 2017; the first spacecraft prototype was being manufactured as of March 2018 and will begin testing in early 2019. The overall space vehicle architecture includes both launch vehicles and spacecraft that are intended to completely replace all of SpaceX's existing space hardware by the early 2020s as well as ground infrastructure for rapid launch and relaunch, and zero-gravity propellant transfer technology to be deployed in low Earth orbit (LEO). The large payload to Earth orbit of up to 150,000 kg (330,000 lb) makes BFR a super heavy-lift launch vehicle."
  }
]
