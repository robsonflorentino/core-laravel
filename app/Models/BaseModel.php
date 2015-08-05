<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Classe base para os models criados
 *
 * @author robson_florenti
 */
class BaseModel extends Model {

    /**
     * The name of the "created at" column.
     *
     * @var string
     */
    const CREATED_AT = 'dat_criacao';

    /**
     * The name of the "updated at" column.
     *
     * @var string
     */
    const UPDATED_AT = 'dat_modificacao';

    /**
     * The name of the "deleted at" column.
     *
     * @var string
     */
    const DELETED_AT = 'dat_exclusao';

}
