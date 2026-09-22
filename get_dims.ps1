Add-Type -AssemblyName System.Drawing
$files = @(
  "C:\Users\ihann\Documents\Codex\2026-09-18\https-github-com-ivyhannu-iveren-hannu\work\repo\public\vibe-coding-prd.jpg",
  "C:\Users\ihann\Documents\Codex\2026-09-18\https-github-com-ivyhannu-iveren-hannu\work\repo\public\wcag-design-systems.jpg",
  "C:\Users\ihann\Documents\Codex\2026-09-18\https-github-com-ivyhannu-iveren-hannu\work\repo\public\designing-for-clarity.jpg",
  "C:\Users\ihann\Documents\Codex\2026-09-18\https-github-com-ivyhannu-iveren-hannu\work\repo\public\color-as-strategy.jpg"
)
foreach ($f in $files) {
  $img = [System.Drawing.Image]::FromFile($f)
  $name = [System.IO.Path]::GetFileName($f)
  Write-Host "$name : $($img.Width)x$($img.Height)"
  $img.Dispose()
}