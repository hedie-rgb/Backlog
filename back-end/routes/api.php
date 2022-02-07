<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestCaseController;

/*
routes for frontend to send requests to them
*/

Route::get('testcases', 'App\Http\Controllers\TestCaseController@index');
Route::post('testcases', 'App\Http\Controllers\TestCaseController@create');
Route::delete('testcases/{id}', 'App\Http\Controllers\TestCaseController@destroy');
