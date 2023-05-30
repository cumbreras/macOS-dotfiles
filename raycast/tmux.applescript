#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title tmux
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 🤖
# @raycast.argument1 { "type": "text", "placeholder": "Placeholder" }
# @raycast.argument1 { "type": "text", "placeholder": "session name" }

on run argv

tell application "iTerm"
	activate
	set the clipboard to "tmux a -t " & ( item 1 of argv )
	delay 0.5
	tell application "System Events"
		keystroke "v" using command down
		keystroke return
	end tell
end tell

log "Hello World! Argument1 value: " & ( item 1 of argv )
end run