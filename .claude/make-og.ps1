Add-Type -AssemblyName System.Drawing
$root = Split-Path -Parent $PSScriptRoot
$W = 1200; $H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Paleta oficial
$cream  = [System.Drawing.Color]::FromArgb(255,254,246)
$forest = [System.Drawing.Color]::FromArgb(38,63,41)
$teal   = [System.Drawing.Color]::FromArgb(75,120,120)

# Fondo: gradiente crema -> verde menta muy claro
$rectAll = New-Object System.Drawing.Rectangle(0,0,$W,$H)
$grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rectAll, [System.Drawing.Color]::FromArgb(255,254,246), [System.Drawing.Color]::FromArgb(224,238,228), 55.0)
$g.FillRectangle($grad, $rectAll)

# Círculo decorativo suave (mint translúcido)
$softMint = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(70,189,224,199))
$g.FillEllipse($softMint, -90, -130, 380, 380)
$softMint2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45,97,182,176))
$g.FillEllipse($softMint2, 120, 430, 240, 240)

# Foto floral a la derecha (cover-crop)
$photoX = 720; $photoW = $W - $photoX
$img = [System.Drawing.Image]::FromFile((Join-Path $root 'images\WhatsApp-Image-2026-02-18-at-10.07.24-AM.jpeg'))
$srcW = $img.Width; $srcH = $img.Height
$targetAspect = $photoW / [double]$H
$srcAspect = $srcW / [double]$srcH
if ($srcAspect -gt $targetAspect) {
  $cropH = $srcH
  $cropW = [int]($srcH * $targetAspect)
  $cropX = [int]((($srcW - $cropW) / 2))
  $cropY = 0
} else {
  $cropW = $srcW
  $cropH = [int]($srcW / $targetAspect)
  $cropX = 0
  $cropY = [int]((($srcH - $cropH) * 0.30))
}
$destRect = New-Object System.Drawing.Rectangle($photoX, 0, $photoW, $H)
$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Mezcla suave en el borde izquierdo de la foto (crema -> transparente)
$blendRect = New-Object System.Drawing.Rectangle($photoX, 0, 110, $H)
$blend = New-Object System.Drawing.Drawing2D.LinearGradientBrush($blendRect, [System.Drawing.Color]::FromArgb(245,255,254,246), [System.Drawing.Color]::FromArgb(0,255,254,246), 0.0)
$g.FillRectangle($blend, $blendRect)

# Textos
$margin = 78
$brushForest = New-Object System.Drawing.SolidBrush($forest)
$brushTeal = New-Object System.Drawing.SolidBrush($teal)
$sf = New-Object System.Drawing.StringFormat

# Marca
$fontBrand = New-Object System.Drawing.Font('Georgia', 32, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('Triplets', $fontBrand, $brushForest, ($margin - 2), 62)
$fontBrandSub = New-Object System.Drawing.Font('Arial', 14, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('F L O W E R   A T E L I E R', $fontBrandSub, $brushTeal, $margin, 106)

# Línea acento
$penTeal = New-Object System.Drawing.Pen($teal, 3)
$g.DrawLine($penTeal, $margin, 150, ($margin + 56), 150)

# Titular (Georgia, con wrap)
$fontH = New-Object System.Drawing.Font('Georgia', 52, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$headRect = New-Object System.Drawing.RectangleF($margin, 196, ($photoX - $margin - 46), 250)
$g.DrawString('Flores que hacen especial lo cotidiano.', $fontH, $brushForest, $headRect, $sf)

# Secundario (caracteres acentuados por code-point para evitar problemas de encoding del .ps1)
$fontSec = New-Object System.Drawing.Font('Arial', 20, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$secRect = New-Object System.Drawing.RectangleF($margin, 506, ($photoX - $margin - 40), 90)
$dot = [string][char]0x00B7
$iac = [string][char]0x00ED
$secText = "C{0}rculo Blossom {1} Blossom Bar {1} Atelier en Bosque Real" -f $iac, $dot
$g.DrawString($secText, $fontSec, $brushTeal, $secRect, $sf)

# Guardar
$out = Join-Path $root 'images\og-triplets.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose(); $img.Dispose()
Write-Output "Saved $out ($W x $H)"
