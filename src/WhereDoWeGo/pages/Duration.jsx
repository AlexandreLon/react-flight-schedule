import React from 'react'
import Slider from '@material-ui/core/Slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const ShowValue = ({value}) => {
  return <>{value < 60 ? <span>{value}Min</span> : <span>{parseInt(value/60)}H{value%60 < 10 ? '0' + value%60 : value%60}</span> }</>
}

export const Duration = ({onChange = (_) => {}}) => {

  const [value, setValue] = React.useState(30)
  const [enabled, setEnabled] = React.useState(true)

  const handleChange = (_, newValue) => {
    setValue(newValue)
    onChange(newValue)
    setEnabled(true)
  }

  const handleReset = () => {
    onChange(undefined)
    setEnabled(false)
  }

  React.useEffect(() => {
    onChange(value)
  }, [])

  return <div>
    <div style={{position: 'relative', width: "100%", height: "30vh"}}>
      <div style={{ position: 'relative', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '10rem', height: '10rem'}}>
        <div style={{ position: 'absolute', left: '33%', top: '40%', width: '10rem', height: '10rem'}}>{enabled ? <ShowValue value={value} /> : ''}</div>
        {enabled && <CircularProgress variant="static" style={{width: 'inherit', height: 'inherit'}} variant="determinate" value={value/6} />}
      </div>
    </div>

    <Slider
        min={30}
        max={600}
        step={30}
        key={`value`}
        onChange={handleChange}
        value={value}
      />
      <Button onClick={handleReset}>
        Peu importe
      </Button>
  </div>
}