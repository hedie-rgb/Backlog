<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/*
a model representing testcase
*/

class TestCase extends Model
{
    protected $fillable = [
        'name',
        'version',
        'group',
        'path'
    ];
}
