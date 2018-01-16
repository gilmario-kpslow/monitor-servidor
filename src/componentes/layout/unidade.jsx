import React from 'react'
import SelectLabel from '../form/selectLabel'

export default props => (
    <SelectLabel label={props.label} control={props.control} estilo={props.estilo} name={props.name} value={props.value} change={props.change}>
        <option value="KB">KB</option>
        <option value="MB">MB</option>
        <option value="GB">GB</option>
        <option value="TB">TB</option>
    </SelectLabel>
)

