package main

import "strings"


func isValid(s string) bool {
	var stack = []string{}

	for _, v := range s {

		if strings.Contains("({[", string(v)) {

			stack = append(stack, string(v))

		} else if strings.Contains("]})", string(v)) {

			if len(stack) == 0 {
				return false
			}

			var lastFrame = stack[len(stack)-1]

			if string(v) == ")" && lastFrame == "(" {

				stack = stack[:len(stack)-1]

			} else if string(v) == "}" && lastFrame == "{" {

				stack = stack[:len(stack)-1]

			} else if string(v) == "]" && lastFrame == "[" {

				stack = stack[:len(stack)-1]

			} else {
				return false
			}

		} else {
			return false
		}
	}

	if len(stack) != 0 {
		return false
	}

	return true
}