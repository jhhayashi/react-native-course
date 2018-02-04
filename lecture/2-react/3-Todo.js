class Todo {
  constructor(configuration) {
    this.text = configuration.text || 'New TODO'
    this.checked = false
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.checked} />
        <span>{this.text}</span>
      </li>
    )
  }
}
