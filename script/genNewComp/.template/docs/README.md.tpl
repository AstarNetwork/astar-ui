<script setup>
import demo from './demo.vue'
</script>

# {{ compName }}

{{ compDesc }}

## Preview
<Preview comp-name="{{compName}}" demo-name="demo">
  <demo />
</Preview>

## Properties
name | desc | type | extra | default
:-: | :-: | :-: | :-: | :-:
`arg1` | argument1 | string | - | `default`
`arg2` | argument2 | string | - | `default`

## Event
name | desc | type | extra
:-: | :-: | :-: | :-:
`click` | click event | $event | dom event
`customEvent` | custom event | [a, b, c] | a：a1；b：b1；c：c1
