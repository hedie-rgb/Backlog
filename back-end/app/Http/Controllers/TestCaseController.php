<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestCase;

/*
a controller containing index, create and delete functions
*/

class TestCaseController extends Controller
{
    public function index()
    {
        return TestCase::all();
    }

    public function create(Request $request) {
        $test = TestCase::create($request->all());

        return response()->json($test, 201);
    }

    public function destroy($id)
    {
        $deleted = TestCase::find($id) -> delete();
        return response()->json(null, 204);
    }
}
