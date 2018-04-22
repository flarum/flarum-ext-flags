<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Flags\Api\Controller\CreateFlagController;
use Flarum\Flags\Api\Controller\DeleteFlagsController;
use Flarum\Flags\Api\Controller\ListFlagsController;
use Flarum\Flags\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Assets('forum'))
        ->js(__DIR__.'/js/forum/dist/main.js')
        ->asset(__DIR__.'/less/forum/extension.less'),

    (new Extend\Assets('admin'))
        ->js(__DIR__.'/js/admin/dist/main.js'),

    (new Extend\Routes('api'))
        ->get('/flags', 'flags.index', ListFlagsController::class)
        ->post('/flags', 'flags.create', CreateFlagController::class)
        ->delete('/posts/{id}/flags', 'flags.delete', DeleteFlagsController::class),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddFlagsApi::class);
        $events->subscribe(Listener\AddPostFlagsRelationship::class);
    },
];
