<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ShopTypeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * https://laravel.com/docs/7.x/validation#available-validation-rules
     * @return array
     */
    public function rules()
    {
        if ($this->method() == 'PUT') {
            return [
                'name' => 'string',
                'description' => 'string',
            ];
        }

        return [
            'name' => 'required|string',
            'description' => 'required|string',
        ];
    }
}
