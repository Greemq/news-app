<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ImageController extends Controller
{
    public function getList(Request $request){
        $tmp=Http::get('https://pixabay.com/api/',[
            'key'=>'21321953-5a2837cff72c450b340126c48',
            'per_page'=>40
        ]);

        return response()->json(['list'=>$tmp['hits']]);
    }
}
