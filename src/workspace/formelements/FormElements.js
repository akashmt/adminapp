import React, { Component } from 'react';
import { StyledFormElements, StyledElement } from './stylesheets/styles';

export default class FormElements extends Component {
	render() {
		return (
			<StyledFormElements className="FormElements">
				<h2>Form Elements</h2>

				<StyledElement>

          <div className="element-lists">
            <div className="element-card element-basic">
              <label>Input</label>
              <input />
              <pre><code>{`<input />`}</code></pre>
            </div>

            <div className="element-card element-autofocus">
              <label>Autofocus</label>
              <input autoFocus />
              <pre><code>{`<input autofocus />`}</code></pre>
            </div>

            <div className="element-card element-required">
              <label>Required</label>
              <input required />
              <pre><code>{`<input required />`}</code></pre>
            </div>

            <div className="element-card element-disable">
              <label>Disabled</label>
              <input disabled />
              <pre><code>{`<input disabled />`}</code></pre>
            </div>

            <div className="element-card element-text">
              <label>Text</label>
              <input type="text" />
              <pre><code>{`<input type="text" />`}</code></pre>
            </div>

            <div className="element-card element-textarea">
              <label>Textarea</label>
              <textarea></textarea>
              <pre><code>{`<textarea></textarea>`}</code></pre>
            </div>

            <div className="element-card element-password">
              <label>Password</label>
              <input type="password" placeholder="password" />
              <pre><code>{`<input type="password" placeholder="password" />`}</code></pre>
            </div>

            <div className="element-card element-radio">
              <label>Radio</label>
              <input type="radio" />
              <pre><code>{`<input type="radio" />`}</code></pre>
            </div>

            <div className="element-card element-radio-checked">
              <label>Radio Checked</label>
              <input type="radio" defaultChecked />
              <pre><code>{`<input type="radio" checked />`}</code></pre>
            </div>

            <div className="element-card element-checkbox">
              <label>Checkbox</label>
              <input type="checkbox" />
              <pre><code>{`<input type="checkbox" />`}</code></pre>
            </div>

            <div className="element-card element-checkbox-checked">
              <label>Checkbox Checked</label>
              <input type="checkbox" defaultChecked />
              <pre><code>{`<input type="checkbox" checked />`}</code></pre>
            </div>

            <div className="element-card element-select">
              <label>Select Box</label>
              <select>
                <option></option>
                <option>Option 1</option>
              </select>
              <pre><code>{`<select> 
  <option></option> 
  <option>Option 1</option> 
</select>`}</code></pre>
            </div>

            <div className="element-card element-select-optgroup">
              <label>Select Option Group</label>
              <select>
                <optgroup label="Option group 1">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </optgroup>
                <optgroup>
                  <option>Option 3</option>
                </optgroup>
              </select>
              <pre><code>{`<select>
  <optgroup label="Option group 1">
    <option>Option 1</option>
    <option>Option 2</option>
  </optgroup>
  <optgroup>
    <option>Option 3</option>
  </optgroup>
</select>`}</code></pre>
            </div>

            <div className="element-card element-search">
              <label>Search</label>
              <input type="search" />
              <pre><code>{`<input type="search" />`}</code></pre>
            </div>

            <div className="element-card element-file">
              <label>File</label>
              <input type="file" />
              <pre><code>{`<input type="file" />`}</code></pre>
            </div>

            <div className="element-card element-fieldset">
              <label>Fieldset</label>
              <fieldset>
                <legend>Legend</legend>
                <label htmlFor="field">Label</label>
                <input id="field" />
              </fieldset>
              <pre><code>{`<fieldset>
  <legend>Legend</legend>
  <label for="field">Label</label>
  <input id="field" />
</fieldset>`}</code></pre>
            </div>

            <div className="element-card element-submit">
              <label>Submit</label>
              <input type="submit" />
              <pre><code>{`<input type="submit" />`}</code></pre>
            </div>

            <div className="element-card element-button">
              <label>Button</label>
              <button>Button</button>
              <pre><code>{`<button>Button</button>`}</code></pre>
            </div>

            <div className="element-card element-reset">
              <label>Reset</label>
              <input type="reset" />
              <pre><code>{`<input type="reset" />`}</code></pre>
            </div>

            <div className="element-card element-email">
              <label>Email</label>
              <input type="email" />
              <pre><code>{`<input type="email" />`}</code></pre>
            </div>

            <div className="element-card element-tel">
              <label>Telephone</label>
              <input type="tel" />
              <pre><code>{`<input type="tel" />`}</code></pre>
            </div>

            <div className="element-card element-url">
              <label>URL</label>
              <input type="url" />
              <pre><code>{`<input type="url" />`}</code></pre>
            </div>

            <div className="element-card element-number">
              <label>Number</label>
              <input type="number" />
              <pre><code>{`<input type="number" />`}</code></pre>
            </div>

            <div className="element-card element-number-limit">
              <label>Number Limit</label>
              <input type="number" min="0" max="15" step="3" />
              <pre><code>{`<input type="number" min="0" max="15" step="3" />`}</code></pre>
            </div>

            <div className="element-card element-range">
              <label>Range</label>
              <input type="range" />
              <pre><code>{`<input type="range" />`}</code></pre>
            </div>

            <div className="element-card element-range-limit">
              <label>Range Limit</label>
              <input type="range" min="0" max="15" step="3" />
              <pre><code>{`<input type="range" min="0" max="15" step="3" />`}</code></pre>
            </div>

            <div className="element-card element-date">
              <label>Date</label>
              <input type="date" />
              <pre><code>{`<input type="date" />`}</code></pre>
            </div>

            <div className="element-card element-month">
              <label>Month</label>
              <input type="month" />
              <pre><code>{`<input type="month" />`}</code></pre>
            </div>

            <div className="element-card element-week">
              <label>Week</label>
              <input type="week" />
              <pre><code>{`<input type="week" />`}</code></pre>
            </div>

            <div className="element-card element-time">
              <label>Time</label>
              <input type="time" />
              <pre><code>{`<input type="time" />`}</code></pre>
            </div>

            <div className="element-card element-datetime">
              <label>Date Time</label>
              <input type="datetime" />
              <pre><code>{`<input type="datetime" />`}</code></pre>
            </div>

            <div className="element-card element-datetime-local">
              <label>Local Date Time</label>
              <input type="datetime-local" />
              <pre><code>{`<input type="datetime-local" />`}</code></pre>
            </div>

            <div className="element-card element-color">
              <label>Color</label>
              <input type="color" />
              <pre><code>{`<input type="color" />`}</code></pre>
            </div>

            <div className="element-card element-color-value">
              <label>Color with value</label>
              <input type="color" defaultValue="#ff3d3d" />
              <pre><code>{`<input type="color" value="#ff3d3d" />`}</code></pre>
            </div>

            <div className="element-card element-progress-value">
              <label>Progress value</label>
              <progress max="100" value="45"></progress>
              <pre><code>{`<progress max="100" value="45"></progress>`}</code></pre>
            </div>

            <div className="element-card element-progress">
              <label>Progress</label>
              <progress></progress>
              <pre><code>{`<progress></progress>`}</code></pre>
            </div>

            <div className="element-card element-meter ">
              <label>Meter </label>
              <meter value="70" min="0" max="100" low="25" high="75" optimum="15"></meter>
              <pre><code>{`<meter value="70" min="0" max="100" 
low="25" high="75" optimum="15"></meter>`}</code></pre>
            </div>
          </div>

				</StyledElement>
			</StyledFormElements>
		)
	}
}