import { to_tree, render } from "./mdex.min.js";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const line_number_list = document.querySelector(".line_number");

const on_change = () => 
{
	let input_text = input.textContent.split("\n");

	{
		let line_numbers = line_number_list.querySelectorAll("li");
		let current_line_length = line_numbers.length;
		let target_count = input_text.length + 1;

		if (current_line_length > target_count)
			for (let i = current_line_length - 1; i >= target_count; --i)
				line_number_list.removeChild(line_numbers[i]);

		// possible improvement by setting display to none if it already exist instead of creating it
		// also can pool it instead of just letting gc handle it when removing.
		else if (current_line_length < target_count)
			for (let i = current_line_length + 1; i < target_count; ++i)
				line_number_list.appendChild(document.createElement("li")).textContent = i;

	}

	output.replaceChildren(...render(to_tree(input_text, void 0, false)));
}

input.addEventListener("paste", on_change);
input.addEventListener("input", on_change);

document.querySelector(".editor").addEventListener("click", () => input.focus());
