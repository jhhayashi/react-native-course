import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import {Countdown, TimeInput, TimerToggleButton} from './components'
import {Timer, vibrate} from './utils'

const DEFAULT_WORK_MINS = 25
const DEFAULT_BREAK_MINS = 5

const minToSec = mins => mins * 60
const nextTimer = {work: 'break', break: 'work'}

export default class App extends React.Component {
  state = {
    // in seconds
    workTime: minToSec(DEFAULT_WORK_MINS),
    breakTime: minToSec(DEFAULT_BREAK_MINS),
    // in ms
    timeRemaining: minToSec(DEFAULT_WORK_MINS) * 1000,
    isRunning: false,
    activeTimer: 'work',
  }

  componentDidMount() {
    this.timer = new Timer(this.state.timeRemaining, this.updateTimeRemaining, this.handleTimerEnd)
    this.setState({isRunning: this.timer.isRunning})
  }

  componentWillUnmount() {
    if (this.timer) this.timer.stop()
  }

  updateTime = target => (time, shouldStartTimer) => {
    if (this.state.activeTimer === target) {
      if (this.timer) this.timer.stop()
      const timeRemaining = +time * 1000
      this.timer = new Timer(timeRemaining, this.updateTimeRemaining, this.handleTimerEnd)
      if (!shouldStartTimer) this.timer.stop()
      this.setState({[`${target}Time`]: time, timeRemaining, isRunning: this.timer.isRunning})
    } else {
      this.setState({[`${target}Time`]: time, isRunning: this.timer.isRunning})
    }
  }

  // hack: if an event is passed (ie is button press), stop timer
  resetTimer = shouldStopTimer => {
    const {activeTimer} = this.state
    this.updateTime(activeTimer)(this.state[`${activeTimer}Time`], !shouldStopTimer)
  }

  updateTimeRemaining = timeRemaining => {
    this.setState({timeRemaining})
  }

  toggleTimer = () => {
    if (!this.timer) return
    if (this.timer.isRunning) this.timer.stop()
    else this.timer.start()

    this.setState({isRunning: this.timer.isRunning})
  }

  handleTimerEnd = () => {
    vibrate()
    this.setState(prevState => ({activeTimer: nextTimer[prevState.activeTimer]}), this.resetTimer)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.center]}>{this.state.activeTimer.toUpperCase()} TIMER</Text>
        <Countdown style={styles.center} timeRemaining={this.state.timeRemaining} onToggleTimer={this.toggleTimer} />
        <View style={[styles.buttonGroup, styles.center]}>
          <TimerToggleButton onToggle={this.toggleTimer} isRunning={this.state.isRunning} />
          <Button title="Reset" onPress={this.resetTimer} />
        </View>
        <TimeInput
          title="WORK TIME:"
          onChange={this.updateTime('work')}
          value={this.state.workTime}
        />
        <TimeInput
          title="BREAK TIME:"
          onChange={this.updateTime('break')}
          value={this.state.breakTime}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  center: {
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
  },
});
