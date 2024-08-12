@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
{{-- <img src="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-3/32/code--reference-512.png" class="logo" alt="Laravel Logo"> --}}
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo" alt="Laravel Logo">
    <path d="M7 2L2 4.5V9.5L7 12L12 9.5V4.5L7 2Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M17 7L12 9.5V14.5L17 17L22 14.5V9.5L17 7Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M7 14L2 16.5V21.5L7 24L12 21.5V16.5L7 14Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 9.5V14.5" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M7 12V17" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 21.5L17 19" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M17 12L12 9.5" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  </svg>
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
