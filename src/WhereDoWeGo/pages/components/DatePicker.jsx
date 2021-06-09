import { DateRangePicker } from 'react-date-range';
import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const DatePicker = ({start = new Date(), end = new Date(), onChange = () => {}}) => {
  const [range, setRange] = React.useState({
      startDate: start,
      endDate: end,
      key: 'selection',
  })

  const handleSelect = (date) => {
    setRange({key: 'selection', startDate: new Date(date.selection.startDate), endDate: new Date(date.selection.endDate)});
    onChange({startDate: new Date(date.selection.startDate), endDate: new Date(date.selection.endDate)})
  }

  React.useEffect(() => {
    onChange({startDate: new Date(range.startDate), endDate: new Date(range.endDate)})
  }, [])

  return (
      <DateRangePicker
        ranges={[range]}
        minDate={new Date()}
        onChange={handleSelect}
      />
    )
};