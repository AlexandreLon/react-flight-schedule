import React from 'react'
import {StepPage} from './StepPage'
import {Traveller} from './pages/Traveller'
import {Departure} from './pages/Departure'
import {DatePage} from './pages/DatePage'
import {Destination} from './pages/Destination'
import {Duration} from './pages/Duration'
import {Result} from './pages/Result'

const steps = [
  {
    code: "traveller",
    title: "Voyageurs",
    Component: Traveller,
  },
  {
    code: "departure",
    title: "Départ",
    Component: Departure
  },
  {
    code: "date",
    title: "Dates",
    Component: DatePage
  },
  {
    code: "destination",
    title: "Destination",
    Component: Destination
  },
  {
    code: "duration",
    title: "Temps de vol",
    Component: Duration
  }
]

const countries = [
    {
        name: 'Italy',
        destinations: [
            {
                name: 'Rome',
                airlines: [
                    {
                        code: 'AF',
                        value: 3,
                    },
                    {
                        code: 'U2',
                        value: 2,
                    },
                ],
            },
            {
                name: 'Naples',
                airlines: [
                    {
                        code: 'AF',
                        value: 3,
                    },
                    {
                        code: 'U2',
                        value: 2,
                    },
                ],
            },
        ],
    },
    {
        name: 'Espagne',
        destinations: [
            {
                name: 'Malaga',
                airlines: [
                    {
                        code: 'AF',
                        value: 3,
                    },
                    {
                        code: 'U2',
                        value: 2,
                    },
                ],
            },
            {
                name: 'Ibiza',
                airlines: [
                    {
                        code: 'AF',
                        value: 3,
                    },
                    {
                        code: 'U2',
                        value: 2,
                    },
                ],
            },
        ],
    },
    {
        name: 'Corse',
        destinations: [
            {
                name: 'Ajaccio',
                airlines: [
                    {
                        code: 'XK',
                        value: 5,
                    },
                    {
                        code: 'AF',
                        value: 3,
                    },
                ],
            },
        ],
    },
];

export const WhereDoWeGo = () => {

  const [form, setForm] = React.useState({});
  const [current, setCurrent] = React.useState(steps[0].code);

  const handleChange = (attr, value) => {
    setForm({...form, [attr]: value})
  }

  const handleStep = (e) => {
    console.log(e)
    setCurrent(e)
  }

  return <><StepPage
    done={<Result countries={countries} />}
    onChange={handleStep}
    onReset={() => setForm({})}
    failed={steps.slice(0, steps.findIndex(e => e.code === current)).filter(e => !form[e.code]).map(e => e.code)}
  >
    {
      steps.map(step => {
        const Component = step.Component;
        return <div code={step.code} title={step.title}><Component key={step.code} onChange={(value) => {handleChange(step.code, value)}} /></div>
      })
    }

  </StepPage></>
}