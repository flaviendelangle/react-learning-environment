import { find } from 'lodash'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { Title } from '@habx/thunder-ui'

import EXERCISES from './ExercisePage.data'
import { ExercisePageContainer } from './ExercisePage.style'

const ExercisePage = ({ exerciseId }) => {
  const exercise = useMemo(() => find(EXERCISES, el => el.id === exerciseId), [
    exerciseId,
  ])

  if (!exercise) {
    return null
  }

  return (
    <ExercisePageContainer>
      <Title size={2}>{exercise.title}</Title>
    </ExercisePageContainer>
  )
}

ExercisePage.propTypes = {
  exerciseId: PropTypes.string.isRequired,
}

export default ExercisePage
