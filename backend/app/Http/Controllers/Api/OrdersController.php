<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $object = (object) [
            'data' => (object) [
                'uom' => ['Inches', 'Meter', 'Millimeter', 'Pack', 'Piece'],
                'currency' => ['IDR', 'USD', 'JPY'],
                'charge_to' => ['PT Arya', 'PT Gunawan', 'PT Roedi']
            ]
        ];
        
    
        return response()->json($object);
    }
}
