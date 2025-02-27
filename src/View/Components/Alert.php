<?php

namespace WireUi\View\Components;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Arr;
use WireUi\Traits\Components\{HasSetupColor, HasSetupRounded, HasSetupVariant};

class Alert extends WireUiComponent
{
    use HasSetupColor;
    use HasSetupRounded;
    use HasSetupVariant;

    protected array $packs = ['shadow', 'padding'];

    protected array $props = [
        'icon'       => null,
        'title'      => null,
        'iconless'   => false,
        'shadowless' => false,
    ];

    protected function processed(array $data): void
    {
        $this->title ??= data_get($data, 'title');
    }

    public function getUseIcon(): mixed
    {
        return $this->icon ?? Arr::get($this->colorClasses, 'icon', 'bell');
    }

    public function blade(): View
    {
        return view('wireui::components.alert');
    }
}
