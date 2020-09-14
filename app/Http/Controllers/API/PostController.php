<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    //
    public function company(Request $request)
    {
        $companies = DB::select('SELECT company_id, company_name, location FROM company_master WHERE delete_flag = 0 LIMIT 100');

        return $companies;
    }
}
